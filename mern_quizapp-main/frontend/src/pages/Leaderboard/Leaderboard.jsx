import { Table, Pagination , Grid} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Foot from '../../components/Foot';
import { useNavigate } from 'react-router-dom';

export default function Leaderboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;
  const columns = [
    {
      key: "rank",
      label: "RANK",
    },
    {
      key: "username",
      label: "NAME",
    },
    {
      key: "quizname",
      label: "QUIZ ATTEMPTED",
    },
    {
      key: "score",
      label: "SCORE",
    },
  ];

  const getResults = async () => {
    const response = await fetch('http://localhost:5000/api/getresults', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const res = await response.json();
    if (res.success) {
      const d = res.results;
      const sortedData = [...d].sort((a, b) => b.score - a.score);
      const totalItems = sortedData.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(totalPages);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const slicedData = sortedData.slice(startIndex, endIndex);
      const rankedData = slicedData.map((item, index) => ({
        ...item,
        rank: startIndex + index + 1
      }));
      setData(rankedData);
    } else {
      alert('Error fetching results');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/signin");
    }
    getResults();
  }, [currentPage]);

  return (
    <>
      <Nav />
      <Table
        lined
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns} color="secondary">
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body>
          {data.map((item, index) => (
            <Table.Row key={index}>
              {columns.map((column) => (
                <Table.Cell key={column.key}>{item[column.key]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
        
      </Table>
      <Grid.Container justify="center">

      <Pagination rounded color="secondary"
        total={totalPages}
        current={currentPage}
        onChange={handlePageChange}
        css={{mb:"2rem"}}
      />
      </Grid.Container>
      <Foot />
    </>
  );
}
