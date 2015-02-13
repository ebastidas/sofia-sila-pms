/**
 * SilaLibService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

public interface SilaLibService extends javax.xml.rpc.Service {

/**
 * WSDL File for infoteam silaLib version 1.3.2.1 based TestDevice
 */
    public java.lang.String getsilaLibPortAddress();

    public org.sila_standard.SilaLibPortType getsilaLibPort() throws javax.xml.rpc.ServiceException;

    public org.sila_standard.SilaLibPortType getsilaLibPort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}
