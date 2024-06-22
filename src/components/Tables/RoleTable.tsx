

import { Table, TableTbody, TableTd, TableTh } from "@mantine/core";
import { Container, TableThead, TableTr } from "@mantine/core";
import { UserRole } from "@prisma/client";

type RolesTableProps = {
  roles: UserRole[];
};

const RolesTable = ({ roles }: RolesTableProps) => {
  const rows = roles.map((role) => (
    <TableTr key={role.id}>
      <TableTd>{role.name}</TableTd>
      <TableTd>{role.description}</TableTd>
      <TableTd>{role.createdAt.toDateString()}</TableTd>
      <TableTd>{role.updatedAt.toDateString()}</TableTd>
    </TableTr>
  ));

  return (
    <Container fluid>
      <Table>
        <TableThead>
        <TableTr>
          <TableTh>Name</TableTh>
          <TableTh>Description</TableTh>
          <TableTh>Created</TableTh>
          <TableTh>Last Updated</TableTh>
        </TableTr>
      </TableThead>
      <TableTbody>{rows}</TableTbody>
      </Table>
      
    </Container>
  );
};

export default RolesTable;
