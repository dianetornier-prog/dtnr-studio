"use client";

import { useState } from "react";
import Image from "next/image";
import { send } from "@emailjs/browser";
import { useForm, type SubmitHandler } from "react-hook-form";

import { CustomInput } from "@/components/ui/CustomInput";
import { CustomTextarea } from "@/components/ui/CustomTextarea";
import SectionLayout from "../layout/section-layout";
import { CustomButton } from "../ui/CustomButton";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  postalCode: string;
  city: string;
  message: string;
};

const PHONE_REGEX = /^0[1-9]\d{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POSTAL_CODE_REGEX = /^\d{5}$/;
const MESSAGE_MAX_LENGTH = 1000;

type SubmissionStatus =
  | { readonly type: "success"; readonly message: string }
  | { readonly type: "error"; readonly message: string };

export function Contact() {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      postalCode: "",
      city: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setSubmissionStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    console.log(serviceId, templateId, publicKey);

    if (!serviceId || !templateId || !publicKey) {
      setSubmissionStatus({
        type: "error",
        message:
          "Le formulaire est temporairement indisponible. Veuillez réessayer plus tard.",
      });
      return;
    }

    try {
      await send(
        serviceId,
        templateId,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          postalCode: data.postalCode,
          city: data.city,
          message: data.message,
        },
        publicKey,
      );

      reset();
      setSubmissionStatus({
        type: "success",
        message: "Votre message a bien été envoyé.",
      });
    } catch {
      setSubmissionStatus({
        type: "error",
        message:
          "L’envoi du message a échoué. Veuillez réessayer dans quelques instants.",
      });
    }
  };

  return (
    <SectionLayout
      id="contact"
      ariaLabelledby="contact-heading"
      className="
        flex min-h-screen scroll-mt-16 flex-col items-center justify-center
        gap-6 px-6 text-center
      "
    >
      <h2
        id="contact-heading"
        className="
          font-title text-[30px] font-light tracking-normal text-heading
          sm:text-5xl
        "
      >
        Formulaire de contact
      </h2>

      <div
        className="
          grid w-full max-w-[1250px] grid-cols-1 gap-5 p-4 md:grid-cols-2
        "
      >
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 w-full max-w-xl space-y-4"
        >
          <CustomInput
            id="contact-name"
            placeholder="Votre nom"
            type="text"
            autoComplete="name"
            error={errors.name?.message}
            {...register("name", {
              required: "Veuillez renseigner votre nom.",
              minLength: {
                value: 2,
                message: "Le nom doit contenir au moins 2 caractères.",
              },
            })}
          />

          <CustomInput
            id="contact-phone"
            placeholder="Téléphone"
            type="number"
            autoComplete="tel"
            error={errors.phone?.message}
            {...register("phone", {
              required: "Veuillez renseigner votre numéro de téléphone.",
              pattern: {
                value: PHONE_REGEX,
                message: "Le format du téléphone est invalide.",
              },
            })}
          />

          <CustomInput
            id="contact-email"
            placeholder="Email"
            type="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email", {
              required: "Veuillez renseigner votre email.",
              pattern: {
                value: EMAIL_REGEX,
                message: "Le format de l'email est invalide.",
              },
            })}
          />

          <div
            className="
              grid grid-cols-1 gap-4 sm:grid-cols-2
            "
          >
            <CustomInput
              id="contact-postal-code"
              placeholder="Code postal"
              type="number"
              autoComplete="postal-code"
              error={errors.postalCode?.message}
              {...register("postalCode", {
                required: "Veuillez renseigner votre code postal.",
                pattern: {
                  value: POSTAL_CODE_REGEX,
                  message: "Le code postal doit contenir 5 chiffres.",
                },
              })}
            />

            <CustomInput
              id="contact-city"
              placeholder="Ville"
              type="text"
              autoComplete="address-level2"
              error={errors.city?.message}
              {...register("city", {
                required: "Veuillez renseigner votre ville.",
                minLength: {
                  value: 2,
                  message: "La ville doit contenir au moins 2 caractères.",
                },
              })}
            />
          </div>

          <CustomTextarea
            id="contact-message"
            placeholder="Message"
            rows={5}
            error={errors.message?.message}
            {...register("message", {
              required: "Veuillez renseigner votre message.",
              minLength: {
                value: 2,
                message: "Le message doit contenir au moins 2 caractères.",
              },
              maxLength: {
                value: MESSAGE_MAX_LENGTH,
                message: `Le message ne doit pas dépasser ${MESSAGE_MAX_LENGTH} caractères.`,
              },
            })}
          />

          <CustomButton
            type="submit"
            disabled={isSubmitting}
            aria-describedby={
              submissionStatus ? "contact-submission-status" : undefined
            }
          >
            {isSubmitting ? "Envoi en cours…" : "Envoyer"}
          </CustomButton>

          {submissionStatus ? (
            <p
              id="contact-submission-status"
              role="status"
              aria-live="polite"
              className={
                submissionStatus.type === "success"
                  ? "text-foreground"
                  : "text-heading"
              }
            >
              {submissionStatus.message}
            </p>
          ) : null}
        </form>

        <Image
          className="mt-[-20px]  w-full rounded-lg object-cover"
          src="/assets/13.webp"
          alt="DTNR Studio"
          width={500}
          height={500}
        />
      </div>
    </SectionLayout>
  );
}
