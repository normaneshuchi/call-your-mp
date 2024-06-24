import UserRoleModal from "@/components/Modals/UserRoleModal";
import RolesTable from "@/components/Tables/RoleTable";
import { getRoles } from "@/server/roles";
import { Container } from "@mantine/core";

const UserRoles = async () => {
  const roles = await getRoles();

  return (
    <Container fluid px={0}>
      <UserRoleModal />
      <Container my="lg" fluid px={0}>
        <RolesTable roles={roles} />
      </Container>
    </Container>
  );
};

export default UserRoles;
