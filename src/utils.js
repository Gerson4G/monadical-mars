export function tsvToJSON(tsv){
    const lines = tsv.split("\n"); 
    let result = [];
    let headers = lines[0].split("\t");
   
    for(let i=1;i<lines.length;i++){
        let obj = {};
        let currentline=lines[i].split("\t");
        for(let j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result; 
}

export function arrayBufferToBase64(buffer) {
  let binary = '';
  let bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return window.btoa(binary);
};