import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 100%;

  /* border: 2px solid red; */
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px 10px;

  /* border: 2px solid blue; */

  // There seems to be a feature where ul have 40px
  // as automatic margin on the left of the ul (for ul tabs)
  // so manually had to set this value to 0
  padding-inline-start: 0px;
`;

const NavListItem = styled.li`
  color: #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;

  /* margin-bottom: 15px; */
  /* margin-left: -15px; */
  padding: 10px 15px;

  transform-origin: bottom left;
  transition: all .4s ease-in-out;

  &:hover {
    color: white;
    cursor: pointer;
    transform: scale(1.05);
  }

  & > .active {
    color: white;
    border-bottom: 2px solid white;
    transform: scale(1.05);
  }
`;
// active allows navigation links to underline when active
// margin left due to weird offset

function HeaderNavigation() {
  return (
    <>
      <Profile>
        <NavList>
          <NavListItem>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Work Experience
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Education
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Resume
            </Link>
          </NavListItem>
        </NavList>
      </Profile>
    </>
  );
}

export default HeaderNavigation;