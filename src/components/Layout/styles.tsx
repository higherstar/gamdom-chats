import styled from 'styled-components'
import { Paper as MuiPaper } from '@material-ui/core'
import { spacing } from '@material-ui/system'

const Root = styled.div`
  display: flex;
  height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.charcoal};
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  &.MuiPaper-root {
    box-shadow: none;
    background: transparent;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 5px;
      height: 4px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border: none;
      -webkit-border-radius: 2px;
      background-color: #607d8b;
    }

    ::-webkit-scrollbar-track {
      background: 0 0;
    }
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .body {
    margin-top: 60px;
  }
`

export { Root, AppContent, MainContent, Container }
