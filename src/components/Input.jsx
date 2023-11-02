
import styled from 'styled-components';


const StyledInput = styled.input`
     min-width: 50% !important;
    width: 70% !important;
    border: 0.1rem solid #d1d1d1;
    border-radius: 0.4rem;
    box-shadow: none;
    box-sizing: inherit;
    height: 1.7rem;
    padding: 0.6rem 1rem;
   
`

function Input({value ,onChange}) {


  return (
    <StyledInput type="number" value={value} onChange={onChange}  min="20" max="500" required></StyledInput>
  );
}

export default Input;
