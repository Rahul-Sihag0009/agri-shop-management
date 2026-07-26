function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white rounded-xl p-6 w-[650px]">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✖
          </button>

        </div>

        {children}

      </div>
    </div>
  );
}

export default Modal;