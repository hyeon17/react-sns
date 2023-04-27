import create from 'zustand';

export type ModalState = {
  isModalOpen: boolean;
  isPostModalOpen: boolean;
  getIsModalOpen: () => boolean;
  getIsPostModalOpen: () => boolean;
  openModal: () => void;
  openPostModal: () => void;
  closeModal: () => void;
  closePostModal: () => void;
};

const useStore = create<ModalState>((set, get) => ({
  isModalOpen: false,
  isPostModalOpen: false,
  getIsModalOpen: () => get().isModalOpen,
  getIsPostModalOpen: () => get().isPostModalOpen,
  openModal: () => set((prev) => ({ ...prev, isModalOpen: true })),
  openPostModal: () => set((prev) => ({...prev, isPostModalOpen: true})),
  closeModal: () => set((prev) => ({ ...prev, isModalOpen: false })),
  closePostModal: () => set((prev) => ({...prev, isPostModalOpen: false}))
}));

export { useStore };
