function ListNode(val, next) {
    this.val = val;
    this.next = (next === undefined ? null : next);
}

function interactor(first, second, curretRest) {
    const firstNext = first?.next;
    const secondNext = second?.next;
    let val = (first?.val ?? 0) + (second?.val ?? 0) + curretRest;
    let nextRest = 0;

    if (val > 9) {
        nextRest = Math.floor(val / 10);
        val = val % 10;
    }

    if (firstNext || secondNext || nextRest > 0)
        return new ListNode(val, interactor(firstNext, secondNext, nextRest));
    else
        return new ListNode(val);
}

function addTwoNumbers(first, second) {
    return interactor(first, second, 0); 
}

module.exports = { addTwoNumbers }
