import { Flex} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardUser from "../../components/Cards/CardUser";
import GlobalHeader from "../../components/GlobalHeader";
import { useUsers } from "../../providers/Users";
import { useLogout } from "../../providers/Logout";

const AdminAllUsers = () => {
  const [attPage, setAttPage] = useState<boolean>(false);
  const { getUsers, delUsers, users } = useUsers();

  const { logout } = useLogout()

  const handleDelete = (id: number) => {
    delUsers(id);
    setAttPage(!attPage);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attPage]);

  return (
    <>
      <GlobalHeader>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/classes">Cadastrar Classe</Link>
        <Link to="/admin/users">Todos Usuários</Link>
        <Link to="/admin/user_register">Cadastrar Usuário</Link>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      </GlobalHeader>

      <Flex
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        p={["10px", "30px"]}
        paddingTop="30px"
      >
        {users.map((user) => (
          <CardUser key={user.id} data={user} delUsers={handleDelete} />
        ))}
      </Flex>
    </>
  );
};

export default AdminAllUsers;
