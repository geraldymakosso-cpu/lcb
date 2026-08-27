"use client";

import { FormEvent, useState } from "react";

const initialState = { type: "idle", message: "" } as const;

type FormState = { type: "idle" | "loading" | "success" | "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ type: "loading", message: "Envoi en cours…" });

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Votre demande n'a pas pu être envoyée.");
      }

      form.reset();
      setState({
        type: "success",
        message: "Votre demande a bien été transmise. Un conseiller LCB pourra vous recontacter.",
      });
    } catch (error) {
      setState({
        type: "error",
        message: error instanceof Error ? error.message : "Une erreur est survenue. Vous pouvez nous contacter directement sur WhatsApp.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-grid">
        <label>
          <span>Nom et prénom *</span>
          <input name="name" autoComplete="name" minLength={2} maxLength={100} required />
        </label>
        <label>
          <span>Téléphone *</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Ex. 06 123 45 67" minLength={7} maxLength={24} required />
        </label>
        <label>
          <span>Ville *</span>
          <input name="city" autoComplete="address-level2" defaultValue="Pointe-Noire" maxLength={80} required />
        </label>
        <label>
          <span>Votre profil *</span>
          <select name="profile" defaultValue="" required>
            <option value="" disabled>Sélectionner</option>
            <option value="commercant">Commerçant</option>
            <option value="entrepreneur">Entrepreneur / PME</option>
            <option value="salarie">Salarié</option>
            <option value="autre">Autre</option>
          </select>
        </label>
        <label>
          <span>Activité</span>
          <input name="activity" placeholder="Ex. commerce alimentaire" maxLength={120} />
        </label>
        <label>
          <span>Besoin *</span>
          <select name="need" defaultValue="" required>
            <option value="" disabled>Sélectionner</option>
            <option value="financement">Financement</option>
            <option value="accompagnement">Accompagnement</option>
            <option value="information">Information</option>
            <option value="autre">Autre</option>
          </select>
        </label>
        <label className="full-field">
          <span>Montant souhaité <small>(facultatif)</small></span>
          <input name="amount" inputMode="numeric" placeholder="Ex. 150 000 FCFA" maxLength={40} />
        </label>
        <label className="full-field">
          <span>Message</span>
          <textarea name="message" rows={5} maxLength={1200} placeholder="Expliquez brièvement votre besoin." />
        </label>
      </div>

      <label className="consent-field">
        <input name="consent" type="checkbox" value="yes" required />
        <span>J'accepte que LCB utilise les informations saisies pour me recontacter au sujet de ma demande. *</span>
      </label>

      <p className="form-privacy">Ne transmettez ici aucune pièce d'identité, donnée bancaire ou document privé.</p>

      <button className="button button-primary button-submit" type="submit" disabled={state.type === "loading"}>
        {state.type === "loading" ? "Envoi…" : "Transmettre ma demande"}
      </button>

      {state.type !== "idle" && (
        <div className={`form-status ${state.type}`} role="status" aria-live="polite">
          {state.message}
        </div>
      )}
    </form>
  );
}
