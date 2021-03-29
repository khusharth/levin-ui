import React, { useState } from 'react';
import { Modal, Button } from '../../components';

export function Modals() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        heading="Modal Example"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        repudiandae blanditiis repellat ratione mollitia fugiat qui accusamus,
        consequuntur quasi veniam sint sed esse aperiam laborum, odit ipsam
        magni ipsum. Voluptates!
      </Modal>
    </div>
  );
}

export default {
  title: 'Components/Modal',
  component: Modal,
};
