export const FormUtils = {
  parse(value: any): any {
    const newValueInstance = Object.assign({}, value);
    (function isEmpty(data: any): boolean {
      // debugger;
      if (typeof data === 'object' && data !== null) {
        // debugger;
        if (Array.isArray(data)) {
          // debugger;
          // console.log('isArray', data);

          data.forEach((item: any, index: number) => {
            if (isEmpty(item) || item === null) {
              data.splice(index, 1);
            }
          });
        } else {
          // debugger;
          const keys = Object.keys(data);
          keys.forEach((key) => {
            if (isEmpty(data[key])) {
              delete data[key];
            }
          });
        }
      }
      return data === null || data === undefined || data === '';
    })(newValueInstance);
    return newValueInstance;
  },

  parseDateToTimeStamp(obj: any) {
    const newValueInstance = Object.assign({}, obj);
    (function isEmpty(data: any): boolean {
      if (typeof data === 'object' && data !== null) {
        if (Array.isArray(data)) {
          data.forEach((item: any, index: number) => {
            if (isEmpty(item)) {
              data.splice(index, 1);
            }
          });
        } else {
          Object.keys(data).map((key, index) => {
            // console.log(data[key] instanceof Date);
            if (data[key] instanceof Date) {
              data[key] = new Date(data[key]).getTime();
              // data[key] = new Date(
              //   data[key].getTime() + data[key].getTimezoneOffset() * 60000
              // );
            }
          });
        }
      }
      return data === null || data === undefined || data === '';
    })(newValueInstance);
  },
  toTimeStamp: (date: Date) => {
    return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  },
};
