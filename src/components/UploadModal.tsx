"use client";
import { FC, useState } from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import Input from "./Input";
interface UploadModalProps {}

const UploadModal: FC<UploadModalProps> = ({}) => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {};

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          placeholder="Song Title"
          {...register("title", { required: true })}
        />
      </form>
    </Modal>
  );
};

export default UploadModal;
