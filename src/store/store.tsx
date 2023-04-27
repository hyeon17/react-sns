import create from 'zustand';

export type ModalState = {
  isModalOpen: boolean;
  getIsModalOpen: () => boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useStore = create<ModalState>((set, get) => ({
  isModalOpen: false,
  getIsModalOpen: () => get().isModalOpen,
  openModal: () => set((prev) => ({ ...prev, isModalOpen: true })),
  closeModal: () => set((prev) => ({ ...prev, isModalOpen: false })),
}));

export { useStore };
