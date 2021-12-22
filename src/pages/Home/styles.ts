import styled from 'styled-components'

import HoverImg from '../../assets/images/hover.png'

const Container = styled.div`
  padding: 40px;
  max-width: 1620px;
  margin: 0 auto;

  .top {
    position: relative;

    .big-item {
      position: relative;
      transition: all ease 0.5s;
      cursor: pointer;

      .main-img {
        position: relative;
        width: 100%;
        z-index: 2;
      }

      .hover-img {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 0;
        width: 100%;
        transition: all ease 0.5s;
        z-index: 1;
      }

      &.slots:hover {
        transform: rotate(-5deg);

        .hover-img {
          height: 140%;
        }
      }

      &.sports:hover {
        transform: rotate(5deg);

        .hover-img {
          height: 150%;
        }
      }
    }

    .small-item {
      position: relative;
      transition: all ease 0.5s;
      cursor: pointer;
      z-index: 2;

      &::after {
        background-image: url(${HoverImg});
        position: absolute;
        top: 60%;
        left: calc(50% + 20px);
        width: 100%;
        content: '';
        transform: translate(-50%, -50%);
        transition: all ease 0.3s;
        z-index: 1;
        background-size: contain;
        background-repeat: no-repeat;
      }

      img {
        position: relative;
        width: 100%;
        z-index: 2;
      }

      &:hover {
        transform: translateY(-20px);

        &::after {
          height: 100%;
          transform: translate(-50%, -30%);
        }
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
        user-select: none;

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