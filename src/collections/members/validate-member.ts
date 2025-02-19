import payload from "payload";
import { BeforeValidateHook } from "payload/dist/collections/config/types";
import { ValidationError } from "payload/errors";

export const validateMember: BeforeValidateHook = async ({ data, originalDoc }) => {
  const currentMembers = (
    await payload.find({
      collection: "members",
      pagination: false,
      where: { id: { not_equals: originalDoc?.id } },
    })
  ).docs;

  const memberAlreadyExists = currentMembers.some(
    (member) =>
      member.firstname === data?.firstname && member.lastname === data?.lastname,
  );

  if (memberAlreadyExists) {
    throw new ValidationError([
      {
        field: "firstname",
        message: `A member ${data.firstname} ${data.lastname} already exists.`,
      },
      {
        field: "lastname",
        message: `A member ${data.firstname} ${data.lastname} already exists.`,
      },
    ]);
  }
};
