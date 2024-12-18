///  <reference path="./crud.d.ts" />
import { RowID, RowElement }  from './interface';
import * as CRUD from './crud';

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertrow(row);

const updateRow: RowElement = CRUD.updateRow(...row, age: 23);

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowId);
