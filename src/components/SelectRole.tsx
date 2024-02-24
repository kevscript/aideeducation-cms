import React, { useState, useEffect } from "react";
import type { Props } from "payload/components/views/Cell";
import { SelectInput, useField } from "payload/components/forms";
import { useAuth, useDocumentInfo } from "payload/components/utilities";
import { User } from "payload/generated-types";
import { CMS_ROLES } from "../auth/roles";
import { Field, OptionObject } from "payload/types";

export const SelectRole = ({ path }: { path: string }) => {
  const { user } = useAuth<User>();
  const { value, setValue, initialValue } = useField<string>({ path });
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { docPermissions } = useDocumentInfo();
  const [roleOptions, setRoleOptions] = useState<OptionObject[]>([]);

  useEffect(() => {
    if (docPermissions) {
      const hasUpdatePermission = docPermissions.fields?.role?.update.permission;
      if (!hasUpdatePermission) {
        setIsReadOnly(true);
        return;
      }
      setIsReadOnly(false);
    }
  }, [docPermissions]);

  useEffect(() => {
    if (user && isReadOnly === false) {
      let newRoleOptions = [];

      if (user.role === CMS_ROLES.root.value) {
        newRoleOptions = [CMS_ROLES.admin, CMS_ROLES.editor, CMS_ROLES.pending];
      }

      if (user.role === CMS_ROLES.admin.value) {
        newRoleOptions = [CMS_ROLES.editor, CMS_ROLES.pending];
      }

      setRoleOptions(newRoleOptions);
    }
  }, [user, isReadOnly]);

  return (
    <div>
      <label className={`field-label`}>Role</label>
      <SelectInput
        path={path}
        name={path}
        options={isReadOnly ? [CMS_ROLES[initialValue]] : roleOptions}
        value={isReadOnly ? initialValue : value}
        readOnly={isReadOnly}
        onChange={(e) => setValue(e.value)}
        isClearable={false}
      />
    </div>
  );
};

export const SelectRoleCell: React.FC<Props> = (props) => {
  const { cellData } = props;

  return (
    <span
      className="code-cell"
      style={{
        whiteSpace: "nowrap",
        maxWidth: "fit-content",
      }}
    >
      {CMS_ROLES[cellData as string].label}
    </span>
  );
};

export const SelectRoleField: Field = {
  name: "role",
  label: "Role de l'utilisateur",
  type: "select",
  options: Object.values(CMS_ROLES),
  defaultValue: CMS_ROLES.pending.value,
  admin: {
    components: {
      Field: SelectRole,
      Cell: SelectRoleCell,
    },
  },
  access: {
    create: () => false,
  },
  hasMany: false,
  required: true,
};
