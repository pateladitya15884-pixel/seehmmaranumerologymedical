import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const registerForCourse = createServerFn({
  method: "POST",
})
  .inputValidator((data) =>
    z
      .object({
        name: z.string().min(2, "Name is too short"),
        phone: z.string().min(10, "Invalid phone number"),
        email: z.string().email("Invalid email address"),
        city: z.string().min(2, "City is required"),
      })
      .parse(data)
  )
  .handler(async ({ data }) => {
    const { error } = await supabase.from("registrations").insert([
      {
        full_name: data.name,
        phone_number: data.phone,
        email: data.email,
        city: data.city,
      },
    ]);

    if (error) {
      console.error("Error saving registration:", error);
      throw new Error("Failed to register. Please try again.");
    }

    return {
      success: true,
      whatsappLink: "https://chat.whatsapp.com/FaPrxZZgmCQ5HCxrErDrfa?s=cl&p=a&ilr=4",
    };
  });
