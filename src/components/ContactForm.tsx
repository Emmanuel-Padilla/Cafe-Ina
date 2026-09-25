import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(field: keyof typeof values, value: string): string | undefined {
    if (field === "name" && !value.trim()) return t.contact.required;
    if (field === "email") {
      if (!value.trim()) return t.contact.required;
      if (!emailPattern.test(value)) return t.contact.invalidEmail;
    }
    if (field === "message" && !value.trim()) return t.contact.required;
    return undefined;
  }

  function handleBlur(field: keyof typeof values) {
    setErrors((prev) => ({ ...prev, [field]: validate(field, values[field]) }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Errors = {
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-text">
          {t.contact.formName} <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t.contact.namePlaceholder}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          onBlur={() => handleBlur("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-text">
            {t.contact.formEmail} <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t.contact.emailPlaceholder}
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            onBlur={() => handleBlur("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-text">
            {t.contact.formPhone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.contact.phonePlaceholder}
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-text">
          {t.contact.formMessage} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={t.contact.messagePlaceholder}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          onBlur={() => handleBlur("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="self-start"
      >
        {status === "submitting" && (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {t.contact.submit}
      </Button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-primary">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            {t.contact.success}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {t.contact.error}
          </p>
        )}
      </div>
    </form>
  );
}
