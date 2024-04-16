import Pagination from 'react-bootstrap/Pagination';

function PaginationFun() {
  return (
    <Pagination className='p-0 m-0'>
      <Pagination.First />
      <Pagination.Prev />

      <Pagination.Item active>{1}</Pagination.Item>
    
      {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationFun;