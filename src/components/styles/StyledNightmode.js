import styled from 'styled-components'

const StyledNightmode = styled.div`
  font-family: 'Hind', sans-serif;
  font-weight: 800;
  font-size: 1.6em;
  color: ${props => props.theme.color};
  padding: 0;
  margin: 20px;

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #3d5138;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }

  .slider .round {
    border-radius: 30px;
  }

  .slider .round:before {
    border-radius: 50%;
  }
`

export default StyledNightmode
