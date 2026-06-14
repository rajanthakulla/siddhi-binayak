"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitContactForm(data: FormData) {
  try {
    await prisma.contactSubmission.create({
      data: {
        fullName: data.get("fullName") as string,
        organization: data.get("organization") as string,
        title: data.get("title") as string,
        phone: data.get("phone") as string,
        email: data.get("email") as string,
        subject: data.get("subject") as string,
        message: data.get("message") as string,
      }
    });
    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to submit form" };
  }
}

export async function submitQuoteForm(data: FormData, categories: string[]) {
  try {
    await prisma.quoteRequest.create({
      data: {
        organization: data.get("organization") as string,
        contactPerson: data.get("contactPerson") as string,
        title: data.get("title") as string,
        phone: data.get("phone") as string,
        email: data.get("email") as string,
        categories: JSON.stringify(categories),
        itemDescription: data.get("itemDescription") as string,
        deliveryLocation: data.get("deliveryLocation") as string,
        requiredByDate: data.get("requiredByDate") ? new Date(data.get("requiredByDate") as string) : null,
        budgetRange: data.get("budgetRange") as string,
        message: data.get("message") as string,
      }
    });
    return { success: true };
  } catch (error) {
    console.error("Error submitting quote form:", error);
    return { success: false, error: "Failed to submit form" };
  }
}
