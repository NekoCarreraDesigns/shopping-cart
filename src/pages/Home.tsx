import { Card } from "react-bootstrap";

export function Home() {
  return (
    <>
      <Card className='d-flex  justify-content-center'>
        <Card.Title className='d-flex justify-content-center'>
          Welcome
        </Card.Title>
        <p>
          This is the store, please feel free to browse around. these items are
          what there is so far
        </p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsnXuiSjJ2zorNGfoISRlrBX7cZh03Kprhg&usqp=CAU' />
      </Card>
    </>
  );
}
