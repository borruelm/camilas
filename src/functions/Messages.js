import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
let count = 0;

export const okMessage = (message) => {
    count = count || 1
    toastr.options = {
      positionClass : 'toast-top-right',
      hideDuration: 300,
      timeOut: 5000
    }
    toastr.clear()
    setTimeout(() => toastr.success('Success: ' + message), 1)
}

export const badMessage = (message) => {
    count = count || 1
    toastr.options = {
      positionClass : 'toast-top-right',
      hideDuration: 300,
      timeOut: 5000
    }
    toastr.clear()
    setTimeout(() => toastr.warning('Error: ' + message), 1)
}

export const deleteMessage = (message) => {
  count = count || 1
  toastr.options = {
    positionClass : 'toast-top-right',
    hideDuration: 300,
    timeOut: 5000
  }
  toastr.clear()
  setTimeout(() => toastr.error(message), 1)
}