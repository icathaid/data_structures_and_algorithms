kthFromEnd(k){
    if(!this.head){
      return 'error';
    }
    let ctr = 0;
    let current = this.head;
    while(current.next){
      current = current.next;
      ctr++;
    }
    if(k > ctr){
      return 'error';
    }
    current = this.head;
    for(let i = 0; i < (ctr - k); i++){
      current = current.next;
    }
    return current.value;
  }



  