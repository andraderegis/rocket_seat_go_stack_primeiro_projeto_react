import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../asserts/logo.svg';

import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <img src="https://avatars.githubusercontent.com/u/25646286?s=460&u=226bb3bdb40561b90895364475609d438b5a2c93&v=4" alt="Regis Andrade" />
        <div>
          <strong>andraderegis/rocket_seat_go_stack_desafio_database_upload</strong>
          <p>Atividade do desafio database upload</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img src="https://avatars.githubusercontent.com/u/25646286?s=460&u=226bb3bdb40561b90895364475609d438b5a2c93&v=4" alt="Regis Andrade" />
        <div>
          <strong>andraderegis/rocket_seat_go_stack_desafio_database_upload</strong>
          <p>Atividade do desafio database upload</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img src="https://avatars.githubusercontent.com/u/25646286?s=460&u=226bb3bdb40561b90895364475609d438b5a2c93&v=4" alt="Regis Andrade" />
        <div>
          <strong>andraderegis/rocket_seat_go_stack_desafio_database_upload</strong>
          <p>Atividade do desafio database upload</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
