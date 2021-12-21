import styled from 'styled-components'

const Container = styled.div`
  padding: 40px;

  .top {
    position: relative;

    .big-item {
      transition: all ease 0.5s;
      cursor: pointer;

      img {
        width: 100%;
      }

      &.slots:hover {
        transform: rotate(-5deg);
      }

      &.sports:hover {
        transform: rotate(5deg);
      }
    }

    .small-item {
      transition: all ease 0.5s;
      cursor: pointer;

      img {
        width: 100%;
      }

      &:hover {
        transform: translateY(-20px);
      }
    }

    .logo {
      position: absolute;
      width: 260px;
      bottom: 150px;
    }
  }
`

export { Container }