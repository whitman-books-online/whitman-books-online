# Ansible deployment for flowriter_studio

Using Ansible with root/sudo privilege on CentOS 7, deploy various parts of the
app.

## System Requirements

* **OS:** CentOS 7

## Usage

```bash
# Deploy only the frontend to its test server (listens on port 3000)
ansible-playbook -i staging frontend_dev.yml
```
