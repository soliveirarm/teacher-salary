import { toast } from "react-toastify"

const toastProperties = {
  toastId: 0,
  position: "bottom-center",
  autoClose: 1500,
}

const classAdded = () => {
  toast.success("Turma adicionada!", toastProperties)
}
const classNotAdded = () => {
  toast.error("Preencha todos os campos!", toastProperties)
}

export { classAdded, classNotAdded }
