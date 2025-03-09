import { toast } from "react-toastify"

const toastProps = {
  toastId: 0,
  position: "bottom-center",
  autoClose: 1500,
  theme: "dark",
}

const classCreatedToast = () => {
  toast.success("Turma adicionada!", toastProps)
}
const classNotCreatedToast = () => {
  toast.error("Preencha todos os campos!", toastProps)
}

const createFavoriteClassWarnings = {
  classNameWarning: () => {
    toast.warning("Você não deu um nome para a turma!", toastProps)
  },
  durationWarning: () => {
    toast.warning("Você esqueceu da duração da aula!", toastProps)
  },
}

export { classCreatedToast, classNotCreatedToast, createFavoriteClassWarnings }
