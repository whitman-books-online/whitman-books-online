# Ansible deployment for flowriter_studio

Using Ansible with root/sudo privilege on CentOS 7, deploy various parts of the
app.

## System Requirements

Target machine:

* **OS:** CentOS 7

Controlling machine (local machine):

- [Ansible installed](http://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-releases-via-pip)

## Usage

```bash
# Deploy the whole app to your local machine (must be running CentOS 7)
# Will need to enter password for sudo
ansible-playbook -i local full_deploy.yml -K

# Deploy only the frontend to the staging (test) server (listens on port 3000)
ansible-playbook -i staging frontend.yml
```
