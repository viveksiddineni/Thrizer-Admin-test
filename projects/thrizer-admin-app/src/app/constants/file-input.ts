import { invalidImageError, invalidFileSize } from './messages';

export const onSelectFile = (
  event,
  accept = 'image/jpeg,image/png,video/mp4,audio/mp3,audio/mpeg',
  maxSize = 10,
  flag=false
): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      console.log(file)
      if (accept && accept.split(',').indexOf(file.type) === -1) {
        if(flag){
          return reject({ type: 1 });
        }else{
          return reject(invalidImageError(accept));
        }
      } else if (maxSize && maxSize < file.size / 1024 / 1024) {
        // reject({ size: 2 });
        return reject(invalidFileSize(maxSize));
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (imgsrc: any) => {
        console.log(imgsrc, 'imgsrc');
        resolve({ file, name: file.name, url: imgsrc.target.result });
      };
    }
  });
};

export const onSelectAudioFile = async (event, accept = 'audio/mp3,audio/mpeg', maxSize = 10): Promise<any[]> => {

  if (event.target.files && event.target.files.length) {
      console.log(event.target.files)
      for (let file of event.target.files) {
          if (accept && accept.split(',').indexOf(file.type) === -1) {
              return Promise.reject({ type: 1 });
          }
          if (maxSize && maxSize < ((file.size / 1024) / 1024)) {
              return Promise.reject({ size: 1 });
          }
      }
      let files = [];
      for (let i = 0; i < event.target.files.length; i++) {
          files.push(readFile(event.target.files[i]));
      }
      return Promise.all(files);
  }
}


const readFile = (file: File) => {

  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (imgsrc: any) => {
          resolve({ file: file, url: imgsrc.target.result, type: file.name.substr(file.name.lastIndexOf('.') + 1) })
      };
  })
}