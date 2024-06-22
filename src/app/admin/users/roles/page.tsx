import { PRIMARY_COLOR } from "@/common/styles";
import UserRoleModal from "@/components/Modals/UserRoleModal";
import RolesTable from "@/components/Tables/RoleTable";
import { getRoles } from "@/server/roles";
import { Button, Container, Flex } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const UserRoles = async () => {
  const roles = await getRoles();


  return (
    <Container fluid px={0}>
      <UserRoleModal/>
      <Container my="lg" fluid px={0}>
        <RolesTable roles={roles} />
      </Container>
    </Container>

  );
};

export default UserRoles;
