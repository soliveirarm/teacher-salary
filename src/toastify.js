import { toast } from "react-toastify"

const toastProperties = {
  toastId: 0,
  position: "bottom-center",
  autoClose: 1500,
}

const classCreatedToast = () => {
  toast.success("Turma adicionada!", toastProperties)
}
const classNotCreatedToast = () => {
  toast.error("Preencha todos os campos!", toastProperties)
}

export { classCreatedToast, classNotCreatedToast }
