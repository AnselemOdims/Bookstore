import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styled from 'styled-components';

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.813rem 6.25rem;
  background: var(--white);

  > div {
    &:last-child {
      border: solid 1px var(--neutral-color-1);
      border-radius: 50%;
      padding: 0.875rem;
      width: 2.813rem;
      height: 2.813rem;
      color: var(--primary-color-1);
    }
  }
`;

const NavContainer = styled(NavBar)`
  padding: 0;

  > div {
    color: #0290ff;
  }

  > nav {

    > .links {
      color: #121212;

      &:first-child {
        margin-left: 2.938rem
      }
      &:last-child {
        margin-left: 2.563rem
      }
    }
  }
`;

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <NavBar>
      <NavContainer as="div">
        <div>
          <h2>Bookstore CMS</h2>
        </div>
        <nav>
          {links.map((link) => (
            <NavLink key={link.id} to={link.path} className="links">
              {link.text}
            </NavLink>
          ))}
        </nav>
      </NavContainer>
      <div>
        <ImUser />
      </div>
    </NavBar>
  );
};

export default Header;
