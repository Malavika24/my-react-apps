import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid';
import Button from 'react-bootstrap/Button';
import TableComponent from "./TableComponent";
import ModalComponent from "./ModalComponent";

const Styles = styled.div`
 table {
   border-spacing: 0;
   border: 1px solid black;

   tr {
     :last-child {
       td {
         border-bottom: 0;
       }
     }
   }

   th,
   td {
     padding: 0.5rem;
     border-bottom: 1px solid black;
     border-right: 1px solid black;

     :last-child {
       border-right: 0;
     }
   }
  
   th {
     background: green;
     border-bottom: 3px solid blue;
     color: white;
     fontWeight: bold;
   }
 }
`

export default function DashBoard() {
  const [show, setShow] = useState(false);
  const [cells, setCells] = useState([]);
  const [teamDetails, setTeamDetails]= useState("");
  const handleClose = () => setShow(false);
  const data = React.useMemo(() => cells, [cells]);
  const handleClick = ( e, row ) => {
    setTeamDetails(row);
    setShow(true);
  };

  const getTeamDetails = async () => {
    const response = await fetch("https://mocki.io/v1/a638c068-89c2-4e24-8447-20a03f5e7b77");
    const data = await response.json();
    setCells(data.Team);
  }

  const columns = React.useMemo(
    () => [
      {
        Header: "GameActivityTag",
        accessor: "GameActivityTag" // accessor is the "key" in the data
      },
      {
        Header: "TeamName",
        accessor: "TeamName"
      },
      {
        Header: "StartDate",
        accessor: "StartDate"
      },
      {
        Header: "EndDate",
        accessor: "EndDate"
      },
      {
        Header: "ViewDetails",
        accessor: "GameActivityId",
        Cell: ({ row }) =>{
          return(
          <Button
            variant="primary"
            onClick={ (e) => handleClick(e, row.original) }
            size="sm"
          >
            ViewDetails
          </Button>
        )},
      },
      {
        Header: "DeleteEntry",
        id: "PublicTeamId",
        accessor: (str) => 'delete',
        Cell: (row) =>{
          return(
          <div
            onClick={(e) => {
              let tableDetails = [...data];
              tableDetails.splice(row.PublicTeamId, 1);
              setCells(tableDetails);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        )},
      },
    ],[data]
  );

  useEffect(() => {
    getTeamDetails();
  }, []);

  
  return (
    <>{cells && 
      <Styles>
        <TableComponent 
          columns={columns} 
          data={data}
          />
        <ModalComponent
          show={show}
          onHide={handleClose}
          ModalDataDetails={teamDetails}
        />
      </Styles>}
    </>
  )
}