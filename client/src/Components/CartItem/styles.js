import styled from 'styled-components'

export const CartStack = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

img {
    width: 75px;
    height: 75px;
    object-fit: cover;
}

@media screen and (max-width: 991px) {
    img {
        width: 25px;
        height: 25px;
    }
}
`

export const CartContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const ProductName = styled.div`
padding-left: .15rem;

span {
    font-size: .65rem;
    color: hsl(219, 9%, 45%);
}
`

export const Price = styled.div`
color: hsl(219, 9%, 45%);
font-size: .85rem;
`


export const SubTotal = styled.div`
display: flex;
width: 10%;
align-items: center;
justify-content: space-between;
`

export const RemoveButton = styled.button`
padding: .5rem .95rem;
background: #ff0000a6;
color: white;
border: transparent;
cursor: pointer;

:hover {
    background: red;
}
`