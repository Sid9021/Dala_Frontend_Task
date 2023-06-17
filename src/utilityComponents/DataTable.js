import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import differenceBy from 'lodash/differenceBy';
import { Button } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";

export const DataTables = ({ title = false, columns = [], tableData = [] }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableData);

  const handleRowSelected = React.useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {

      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.SNO)}?`)) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'SNO'));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);

  const tableDatas = {
    columns,
    data,
  };
  return (

    <DataTableExtensions {...tableDatas} >
      <DataTable
        title={title}
        columns={columns}
        data={data}
        selectableRows={false}
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
      />
    </DataTableExtensions>
  );
}
