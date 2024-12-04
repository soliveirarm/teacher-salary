import { toast } from "react-toastify"

const toastProperties = {
  toastId: 0,
  position: "bottom-center",
  autoClose: 1500,
}

const classAddedToast = () => {
  toast.success("Turma adicionada!", toastProperties)
}
const classNotAddedToast = () => {
  toast.error("Preencha todos os campos!", toastProperties)
}

export { classAddedToast, classNotAddedToast }
