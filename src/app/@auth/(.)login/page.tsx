import { Modal } from "./modal";

export default function Page() {
  console.log("Login Popup?");
  return (
    <>
      <div className="w-20 h-20 bg-red-300">TESTING</div>
      <Modal>
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-red-800">
          Login Popup
        </div>
      </Modal>
    </>
  );
}
