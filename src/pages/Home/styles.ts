import styled from 'styled-components'

const Container = styled.div`
  padding: 40px;
  margin-top: 60px;

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

const TablesContainer = styled.div`
  margin-top: 20px;
  color: #919597;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .tab-container {
      display: inline-flex;
      border-radius: 5px;
      overflow: hidden;

      .tab-item {
        padding: 10px 15px;
        color: #919597;
        background-color: #29353b;
        cursor: pointer;
        transition: all ease 0.3s;

        &.active {
          background-color: #3a424e;
          color: white;
        }

        &:hover {
          background-color: #3a424e;
        }
      }
    }
  }
`

export { Container, TablesContainer }