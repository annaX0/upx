import { BoxNotify } from "./Style.jsx"

export default function BoxNotification({title, content}){
       return(
          <BoxNotify>
          <h4>{title}</h4>
          <p>{content}</p>
          </BoxNotify>
       )
   }