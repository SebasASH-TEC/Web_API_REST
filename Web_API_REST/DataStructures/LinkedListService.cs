namespace Web_API_REST.DataStructures
{
    public class LinkedListService
    {
        // Lista enlazada simple, permite agregar, eliminar y obtener nodos.

        private LinkedListNode? head;

        // Permite obtener todos los nodos de la lista enlazada.
        public IEnumerable<LinkedListNode> GetAll()
        {
            var result = new List<LinkedListNode>();
            var current = head;
            while (current != null)
            {
                result.Add(current);
                current = current.Next;
            }
            return result;
        }

        // Agrega un nuevo nodo al final de la lista enlazada.
        public Guid Add(string value)
        {
            var newNode = new LinkedListNode(value);
            if (head == null)
            {
                head = newNode;
            }
            else
            {
                var current = head;
                while (current.Next != null)
                    current = current.Next;
                current.Next = newNode;
            }
            return newNode.Id;
        }

        // Elimina un nodo de la lista enlazada basado en Id.
        public bool Delete(Guid id)
        {
            if (head == null) return false;

            if (head.Id == id)
            {
                head = head.Next;
                return true;
            }

            var current = head;
            while (current.Next != null && current.Next.Id != id)
                current = current.Next;

            if (current.Next == null) return false;

            current.Next = current.Next.Next;
            return true;
        }
    }

}
