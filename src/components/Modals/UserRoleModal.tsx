"use client";

import { PRIMARY_COLOR } from "@/common/styles";
import { UserRoleForm } from "@/forms/UserRoleForm";
import { Button, Flex, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";

const UserRoleModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size="xs" radius="md" opened={opened} onClose={close} centered>
        <UserRoleForm />
      </Modal>
      <Flex justify="end">
        <Button
          leftSection={<IconPlus size={14} />}
          variant="outline"
          color={PRIMARY_COLOR}
          radius="md"
          onClick={open}
        >
          Add a Role
        </Button>
      </Flex>
    </>
  );
};

export default UserRoleModal;
