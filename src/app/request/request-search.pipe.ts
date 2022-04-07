import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string = ""): Request[] {
    if(searchCriteria === "") {
      return requests;
    }
    let selectedRequests: Request[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let request of requests) {
      if(
        //request.status.toLowerCase().includes(searchCriteria)
      ) {
        selectedRequests.push(request);
      }
    }
    return selectedRequests;
  }
}
