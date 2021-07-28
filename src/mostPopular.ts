export const threeMostPopular = (data: any) => {
    if (data) {
      const bikes = [...data].map((row) => {
        return {
          ...row,
          Model: row.Model.toLowerCase().replace(/ /g, '').replace(/\W/g, ''),
        };
      });
  
      let result = Object.values(
        bikes.reduce((row, { Model, Make }) => {
          if (row[Model] === undefined) {
            row[Model] = { Model: Model, occurrences: 1, Make: Make };
          } else {
            row[Model].occurrences++;
          }
          return row;
        }, {})
      );
  
      result.sort((x: any, y: any) => {
        return y.occurrences - x.occurrences;
      });
  
      return result.slice(0, 3);
    }
  }
  