import styled from 'styled-components'

const Container = styled.div`
  .footer__links {
    display: flex;
    width: 100%;
    height: auto;
    padding: 40px 30px 0;
    background-color: #1f262b;

    .container {
      display: flex;
      flex: 0 0 100%;
      margin: auto;
      max-width: 1270px;

      .links {
        display: flex;
        flex: 1;
        order: 1;
      }

      .socials {
        display: flex;
        flex: 1;
        order: 2;
      }

      .warnings {
        flex: 1;
        margin: auto;
        order: 3;

        .row {
          display: inline-flex;
          float: right;
          padding-bottom: 15px;
          align-items: center;
          justify-content: center;

          img {
            margin-left: 15px;
          }

          .text {
            font-size: 12px;
            color: #919597;
            margin-top: auto;
            margin-bottom: auto;
          }
        }
      }
    }

    .col {
      flex-grow: 1;
      display: inline-block;
    }

    h5 {
      font-size: 14px;
      font-weight: 500;
      color: #fff;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding-left: 0;

      li {
        list-style: none;
        font-size: 12px;
        color: #919597;
        margin-bottom: 1rem;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #919597;

          img {
            height: 20px;
            margin-right: 15px;
          }
        }
      }
    }
  }

  .footer__copyright {
    display: flex;
    align-items: center;
    width: 100%;
    height: 82px;
    background-color: ${props => props.theme.colors.charcoal};
    padding: 0 30px;

    .container {
      display: flex;
      flex: 0 0 100%;
      justify-content: space-between;
      align-items: center;
      margin: auto;
      max-width: 1270px;
    }

    .company {
      display: flex;
      float: left;
      height: 100%;
      order: 1;

      .egaming {
        display: flex;
        align-items: center;

        img {
          display: block;
          max-width: 60px;
          max-height: 45px;
          width: auto;
          height: auto;
        }
      }

      .text {
        font-size: 12px;
        color: #919597;
        margin-left: 24px;
        margin-top: auto;
        margin-bottom: auto;
      }
    }

    .providers {
      display: flex;
      float: right;
      height: 100%;
      order: 2;
      align-items: center;

      .payments {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        img {
          margin-bottom: 2px;
          margin-left: 8px;
          max-height: 31px;
        }
      }
    }
  }
`

export { Container }