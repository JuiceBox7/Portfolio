import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  if (submitted) setSubmitted(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const subject = encodeURIComponent("I Want To Get In Touch!");
      const message = encodeURIComponent(
        `${formData.message} \n\nFrom ${formData.name}\n${formData.email}`
      );
      window.location.href = `mailto:jmlara147@gmail.com?subject=${subject}&body=${message}`;
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="z-20 w-full gap-8 text-left rounded-2xl bg-transparent shadow-xl text-white p-5">
        <div>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="email@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <Textarea
            typeof="text"
            id="message"
            name="message"
            className="h-30 align-top pt-2"
            placeholder="Let me know why you're reaching out!"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
          {errors.message && (
            <span style={{ color: "red" }}>{errors.message}</span>
          )}
        </div>
        {submitted && <span style={{ color: "green" }}>Submitted!</span>}
        <div className="flex items-end justify-end">
          <Button
            type="submit"
            variant="glass"
            size="lg"
            className="gradient-button"
          >
            Send
          </Button>
        </div>
      </Card>
    </form>
  );
}

export default ContactForm;
